import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../context/user.slice";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const router = useRouter();

  // const dispatch = useDispatch();

  const handleSignOut = () => {
    // dispatch(signOut());
    router.push("/login");
  };
  const user = useSelector((state) => state.user);
  return (
    <>
      <div className="wrapper">
        <header className="topnavbar-wrapper">
          <nav className="navbar topnavbar">
            <div className="navbar-header">
              <Link href="/">
                <a className="navbar-brand">
                  <div className="brand-logo">
                    <img className="img-fluid" src="/logo.png" />
                  </div>
                  <div className="brand-logo-collapsed">
                    <img className="img-fluid" src="/logo.png"
                     />
                  </div>
                </a>
              </Link>
            </div>

            <ul className="navbar-nav mr-auto flex-row">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link d-none d-md-block d-lg-block d-xl-block"
                  data-trigger-resize=""
                  data-toggle-state="aside-collapsed"
                >
                  <em className="fas fa-bars"></em>
                </a>

                <a
                  href="#"
                  className="nav-link sidebar-toggle d-md-none"
                  data-toggle-state="aside-toggled"
                  data-no-persist="true"
                >
                  <em className="fas fa-bars"></em>
                </a>
              </li>
              <li className="nav-item d-none d-md-block">
                <Link href="#user-block">
                  <a
                    href="#user-block"
                    className="nav-link"
                    id="user-block-toggle"
                    data-toggle="collapse"
                  >
                    <em className="icon-user"></em>
                  </a>
                </Link>
              </li>

              <li className="nav-item d-none d-md-block">
                <Link href="login">
                  <a
                    onClick={() => handleSignOut()}
                    className="nav-link"
                    title="Log out"
                  >
                    <em className="icon-lock"></em>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <aside className="aside-container">
          <div className="aside-inner">
            <nav className="sidebar" data-sidebar-anyclick-close="">
              <ul className="sidebar-nav">
                <li className="has-user-block">
                  <div className="collapse" id="user-block">
                    <div className="item user-block">
                      <div className="user-block-picture">
                        <div className="user-block-status">
                          <img
                            className="img-thumbnail rounded-circle"
                            src="img/user.png"
                            alt="Avatar"
                            width="60"
                            height="60"
                          />
                          <div className="circle bg-success circle-lg"></div>
                        </div>
                      </div>
                      <div className="user-block-info">
                        <span className="user-block-name">Hello,Steve </span>
                        <span className="user-block-role"></span>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-heading ">
                  <span data-localize="sidebar.heading.HEADER">
                    Main Navigation
                  </span>
                </li>

                <li className=" ">
                 <Link  href="/#dashboard">
                 <a                   
                    title="Dashboard"
                    data-toggle="collapse"
                  >
                   
                    <em className="icon-speedometer"></em>
                    <span data-localize="sidebar.nav.DASHBOARD">Dashboard</span>
                  </a>
                 </Link>
                  <ul
                    className="sidebar-nav sidebar-subnav collapse"
                    id="dashboard"
                  >
                    <li className="sidebar-subnav-header">Dashboard</li>
                    <li className=" ">
                      <Link href="/dashboard">
                        <a title="Dashboard">
                          <span>Admin</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-heading ">
                  <span data-localize="sidebar.heading.COMPONENTS">Pages</span>
                </li>

               
                <li className="">
                  <Link href="/exten72">
                    <a >
                      <em className="icon-layers"></em>
                      <span data-localize="sidebar.nav.WIDGETS">
                     Extention 72
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="">
                  <Link href="/exten72">
                    <a >
                      <em className="icon-list"></em>
                      <span data-localize="sidebar.nav.WIDGETS">
                      Extention 70
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="">
                  <Link href="/payments">
                    <a title="Add Pastorist">
                      <em className="icon-map"></em>
                      <span data-localize="sidebar.nav.WIDGETS">
                      Extention 25
                      </span>
                    </a>
                  </Link>
                </li>
               
               
              </ul>
            </nav>
          </div>
        </aside>

        <section className="section-container">
          <div className="content-wrapper">
            <div className="content-heading">
              <h1>ACRE </h1>
              <br />
              <small>AFRICA</small>
            </div>
            <div className="h-100">{children}</div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Layout;
