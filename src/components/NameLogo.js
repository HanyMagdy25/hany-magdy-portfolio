import Link from "next/link";

const NameLogo = () => {
  return (
    <Link href="/" className="name-logo hover:scale-105 duration-400 transition ease-in-out">
      <span>H</span>
      <span>A</span>
      <span>N</span>
      <span>Y</span>
    </Link>
  );
};

export default NameLogo;
