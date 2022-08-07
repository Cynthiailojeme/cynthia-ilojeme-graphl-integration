import React from "react";
import { clearUserStorage } from "../../utils/functions";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const headers = [
    "Membership Role",
    "Name of Organization",
    "Kind of Organization",
    "Organization Creation Date",
  ];

  const data = {
    email: "cynthia@mail.com",
    firstName: "Cynthia",
    lastName: "Ilojeme",
    createdAt: "20/06/2022",
  };

  const memberships = [
    {
      role: "Member",
      org: {
        name: "Cynthia",
        kind: "Clothing",
        createdAt: "12/03/2022",
      },
    },
    {
      role: "Admin",
      org: {
        name: "Cynthia",
        kind: "Beauty",
        createdAt: "12/03/2022",
      },
    },
    {
      role: "Member",
      org: {
        name: "Cynthia",
        kind: "Childcare",
        createdAt: "12/03/2022",
      },
    },
    {
      role: "Admin",
      org: {
        name: "Cynthia",
        kind: "Drinks",
        createdAt: "12/03/2022",
      },
    },
    {
      role: "Member",
      org: {
        name: "Cynthia",
        kind: "Clothing",
        createdAt: "12/03/2022",
      },
    },
    {
      role: "Admin",
      org: {
        name: "Cynthia",
        kind: "Beauty",
        createdAt: "12/03/2022",
      },
    },
    {
      role: "Member",
      org: {
        name: "Cynthia",
        kind: "Childcare",
        createdAt: "12/03/2022",
      },
    },
    {
      role: "Admin",
      org: {
        name: "Cynthia",
        kind: "Drinks",
        createdAt: "12/03/2022",
      },
    },
  ];

  return (
    <div className={styles.home}>
      <div className={styles.home__information}>
        <div className={styles.home__nav}>
          <h1 className={styles.home__header}>Personal Information</h1>
          <button onClick={() => clearUserStorage()}>Log out</button>
        </div>

        <div className={styles.home__details}>
          <span className={styles.home__title}>First Name:</span>
          <span className={styles.home__value}>{data?.firstName || "Nil"}</span>
        </div>

        <div className={styles.home__details}>
          <span className={styles.home__title}>Last Name:</span>
          <span className={styles.home__value}>{data?.lastName || "Nil"}</span>
        </div>

        <div className={styles.home__details}>
          <span className={styles.home__title}>Email:</span>
          <span className={styles.home__value}>{data?.email || "Nil"}</span>
        </div>

        <div className={styles.home__details}>
          <span className={styles.home__title}>Created At:</span>
          <span className={styles.home__value}>{data?.createdAt || "Nil"}</span>
        </div>
      </div>

      <div className={styles.home__memberships}>
        <h1 className={styles.home__header}>Memberships</h1>

        <table>
          <thead>
            <tr>
              {headers &&
                headers.map((header, index) => <th key={index}>{header}</th>)}
            </tr>
          </thead>

          <tbody>
            {memberships &&
              memberships.map((item, index) => (
                <tr key={index}>
                  <td>{item.role || "Nil"}</td>
                  <td>{item?.org?.name || "Nil"}</td>
                  <td>{item?.org?.kind || "Nil"}</td>
                  <td>{item?.org?.createdAt || "Nil"}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
