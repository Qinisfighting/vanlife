export default function Footer() {
  return (
    <footer>
      {" "}
      <h5>
        © {new Date().getFullYear()} by{" "}
        <a
          href="https://www.yanqin.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          QIN's code
        </a>
      </h5>
    </footer>
  );
}
