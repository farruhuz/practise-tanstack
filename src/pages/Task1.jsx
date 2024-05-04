import BasicTable from '../components/BasicTable'
import { useQuery } from '@tanstack/react-query'

async function fetchMyData() {
  const response = await fetch('https://66260426052332d553214ba8.mockapi.io/users');
  return await response.json();
}

const Task1 = () => {

  const { data, isLoading } = useQuery({ queryKey: ['todos'], queryFn: fetchMyData });

  const movieColumns = [
    {
      header: 'ID',
      accessorKey: 'id',
    },
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Genre',
      accessorKey: 'genre',
    },
    {
      header: 'Rating',
      accessorKey: 'rating',
    },
  ]
  if (isLoading) return <h1>Loading ... </h1>

  console.log(data);

  return <BasicTable data={data} columns={movieColumns} />
}

export default Task1