import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

export default function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState(null);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/SourabhMenaria01")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center bg-gray-600 text-3xl text-white p-4 m-4 ">
      Github followers : {data?.login}
      <img
        className="mt-4"
        src={data?.avatar_url}
        alt="Git Picture"
        width={300}
      />
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/SourabhMenaria01");
  return response.json();
};
