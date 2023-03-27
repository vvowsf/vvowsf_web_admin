import { Avatar } from 'flowbite-react/lib/esm/components/Avatar/Avatar';
import { Dropdown } from 'flowbite-react/lib/esm/components/Dropdown/Dropdown';
import { Navbar } from 'flowbite-react/lib/esm/components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { AppLogo } from '../constants/image';

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('null');

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
};
const AppHeader = () => {
  const scrollDirection = useScrollDirection();
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState('/');
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <header className={`sticky ${scrollDirection === "down" ? "-top-24" : "top-0"} z-50`}>
      <Navbar
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand href="/">
          {/* <img
            src={AppLogo.png}
            className="mr-3 h-6 sm:h-9"
            alt="VVOWSF"
          /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            VVOWSF
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
          >
            <Dropdown.Header>
              <span className="block text-sm">
                Bonnie Green
              </span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              Dashboard
            </Dropdown.Item>
            <Dropdown.Item>
              Settings
            </Dropdown.Item>
            <Dropdown.Item>
              Earnings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              Sign out
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            href="/"
            active={url === '/'}
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="/about" active={url === '/about'}>
            User
          </Navbar.Link>
          <Navbar.Link href="/blog" active={url === '/blog'}>
            Blog
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>

  )
}

export default AppHeader