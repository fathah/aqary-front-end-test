export default function Footer() {
  return (
    <nav className="bg-blue-600 py-20">
      <div className="commonWidth flex flex-col justify-center items-center text-white text-center">
        <h5>
          &copy; {new Date().getFullYear()}
          <br />
          Website Name
        </h5>
      </div>
    </nav>
  );
}
