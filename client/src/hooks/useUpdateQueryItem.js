import { useQueryClient, useMutation } from "react-query";

export default function useUpdateQueryItem(queryKey, queryApi) {
  const queryClient = useQueryClient();
  const queryFun = useMutation(queryApi, {
    // When mutate is called:
    onMutate: async ({ id, data }) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries(queryKey);

      // Snapshot the previous value
      const previousData = queryClient.getQueryData(queryKey);

      // Optimistically update to the new value
      queryClient.setQueryData(queryKey, (old) => {
        let cloneData = { ...old };

        const updatedItemData = cloneData.data.data.reduce((acc, curr) => {
          if (curr._id === id) {
            curr = { ...curr, ...data };
          }
          return [...acc, curr];
        }, []);

        console.log(updatedItemData, "updated");
        cloneData.data.data = updatedItemData;

        return cloneData;
      });

      // Return a context object with the snapshotted value
      return { previousData };
    },

    // If the mutation fails, use the context returned from onMutate to roll back
    onError: (err, id, context) => {
      queryClient.setQueryData(queryKey, context.previousData);
    },
    onSuccess: () => {},
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });

  return queryFun;
}
