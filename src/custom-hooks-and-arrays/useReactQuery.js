import { useQuery } from '@tanstack/react-query';

const useReactQuery = (queryKey, queryFunction) => {
  return useQuery({ queryKey: queryKey, queryFn: queryFunction });
};

export default useReactQuery;
