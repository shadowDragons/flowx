import { Box } from '@chakra-ui/react';

export async function generateStaticParams() {
  const projects = await fetch('http://localhost:3100/api/project/list').then(
    (res) => res.json()
  );

  return projects.map((project: Project) => ({
    id: project.id.toString(),
  }));
}

async function getData(id: number) {
  const res = await fetch(`http://localhost:3100/api/project/detail?id=${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

interface Project {
  id: number;
  title: string;
  type: number;
  description: string;
}

export default async function Home({ params }: { params: { id: number } }) {
  const project: Project = await getData(params.id);
  return <Box>{project.title}</Box>;
}
