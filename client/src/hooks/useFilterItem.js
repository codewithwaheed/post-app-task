import { useQueryClient, useMutation } from "react-query";

export default function useFilterItem(queryKey, queryApi) {
  const queryClient = useQueryClient();
  const queryFun = useMutation(queryApi, {
    // When mutate is called:
    onMutate: async (id) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries(queryKey);

      // Snapshot the previous value
      const previousData = queryClient.getQueryData(queryKey);

      // Optimistically update to the new value
      queryClient.setQueryData(queryKey, (old) => {
        let cloneData = old;

        const updatedItemData = cloneData.data.filter((el) => el._id !== id);

        cloneData.data = updatedItemData;

        return cloneData;
      });

      // Return a context object with the snapshotted value
      return { previousData };
    },

    // If the mutation fails, use the context returned from onMutate to roll back
    onError: (err, id, context) => {
      // Swal.fire({
      //   icon: "error",
      //   title: "Updated",
      //   showConfirmButton: false,
      //   timer: 2000,
      // });
      queryClient.setQueryData(queryKey, context.previousData);
    },
    onSuccess: () => {
      // Swal.fire({
      //   icon: "success",
      //   title: "Updated",
      //   showConfirmButton: false,
      //   timer: 2000,
      // });
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });

  return queryFun;
}
