import { Box } from '@chakra-ui/react';

export async function generateStaticParams() {
  const ids = await fetch('http://localhost:3100/api/project/ids').then((res) =>
    res.json()
  );
  return ids.data.map((id: Id) => ({
    id: id.id.toString(),
  }));
}

async function getData(id: number) {
  const res = await fetch(`http://localhost:3100/api/project/detail/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

interface Id {
  id: number;
}

interface Detail {
  id: number;
  title: string;
  description: string;
}

interface Project {
  data: Detail;
}

export default async function Home({ params }: { params: { id: number } }) {
  const project: Project = await getData(params.id);
  return <Box>{project.data.title}</Box>;
}
