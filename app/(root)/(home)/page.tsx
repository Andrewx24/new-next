import Userprofile from "@/components/Userprofile";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-center text-5xl text-pink-300 mb-8">
        Next JS 15 here we come
      </h1>
      <Userprofile
        user={{ id: "1", name: "John", age: 25, email: "hello@email.com" }}
      />
    </main>
  );
}
