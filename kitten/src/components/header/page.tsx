import Link from "next/link";

const Header = () => {
  const navBar = [
    { id: 1, title: "Images", path: "/images" },
    { id: 2, title: "Votes", path: "/votes" },
    { id: 3, title: "Breeds", path: "/breeds" },
    { id: 4, title: "Favorites", path: "/favorites" },
  ];

  return (
    <div className="flex  flex-row  bg-red-500 p-4 justify-end">
      {navBar.map((item) => (
        <div key={item.id} className="p-4 hover:text-blue-500 bg-transparent ">
          <Link href={item.path}>{item.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Header;
