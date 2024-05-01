export default function Navbar() {
  return (
    <div>
      <ul className="flex justify-center flex-col p-4 md:p-0 mt-4 font-normal rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
        <li>
          <a href="#" className="block py-2 px-3 text-white rounded">
            Blob
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-white rounded">
            Sobre
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-white rounded">
            Descrição
          </a>
        </li>
      </ul>
    </div>
  );
}
