import Head from "next/head";

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default function App({}) {
  return <div className="flex flex-col items-center justify-center py-2"></div>;
}
