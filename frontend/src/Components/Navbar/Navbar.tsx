import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
import {useAuth} from "../../Context/useAuth";
import {useTranslation} from 'react-i18next';

interface Props {
}

const Navbar = (props: Props) => {
  const {isLoggedIn, user, logout} = useAuth();
  const {t, i18n} = useTranslation();
  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  };

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <div className="flex items-center space-x-6">
            <img src="logo.png" alt="Logo" className="h-10"/> {/* Adjust the height as needed */}
            <Link to="/" className="text-black hover:text-darkBlue font-bold hidden lg:flex">
              {t('home')}
            </Link>
          </div>
          <div className="hidden font-bold lg:flex">
            <Link to="/charity" className="text-black hover:text-darkBlue">
              {t('charity')}
            </Link>
          </div>
          <div className="hidden font-bold lg:flex">
            <Link to="/motivation" className="text-black hover:text-darkBlue">
              {t('motivation')}
            </Link>
          </div>
          <div className="hidden font-bold lg:flex">
            <Link to="/about" className="text-black hover:text-darkBlue">
              {t('about')}
            </Link>
          </div>
          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="text-black hover:text-darkBlue">
              {t('search')}
            </Link>
          </div>
        </div>
        {isLoggedIn() ? (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <div className="hover:text-darkBlue">{t('welcome')}, {user?.userName}</div>
            <a
              onClick={logout}
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              {t('logout')}
            </a>
          </div>
        ) : (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <Link to="/login" className="hover:text-darkBlue">
              {t('account')}
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              {t('register')}
            </Link>
            <div className="relative">
              <select
                className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
                name="language"
                id="language"
                onChange={changeLanguage}
              >
                <option value="en">EN</option>
                <option value="ka">ქარ</option>
              </select>
            </div>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
