import { Link } from "react-router-dom";

export const Navbar = () => {
  const nav = [
    { title: "Home", to: "/" },
    {
      title: "Clothings",
      to: "/clothings",
    },
    {
      title: "Shoes",
      to: "/shoes",
    },
    { title: "Electronics", to: "/electronics" },
  ];
  return (
    <div>
      <img className="img" src="https://th.bing.com/th/id/R.80e9962c28a8dfab17fbfd56cd64df07?rik=%2fyGJA38VyfHLUg&riu=http%3a%2f%2fsocialmediaslang.com%2fwp-content%2fuploads%2fparser%2fbanners.com-coupon-code-1.jpg&ehk=x14F%2b50kocLWQQd2qhuZxa6%2f4zwYQGlqtrlOYP6Xqig%3d&risl=&pid=ImgRaw&r=0" alt="" />
      <br />
      {nav.map((e, i) => (
        <Link key={i} to={e.to}>
          {e.title}
        </Link>
      ))}
      Cart
    </div>
  );
};
