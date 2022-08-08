import React from "react";
import { useQuery } from "@apollo/client";
import { Navigate } from "react-router-dom";
import { GET_USER_QUERY } from "../../queries/homepage";
import { clearUserStorage, formatDate } from "../../utils/functions";
import styles from "./HomePage.module.scss";
import { Membership } from "../../generated/graphql";
import SkeletonLoader from "../../components/Loader/SkeletonLoader";

const HomePage = () => {
  const { data, loading } = useQuery(GET_USER_QUERY);

  const headers = [
    "Membership Role",
    "Name of Organization",
    "Kind of Organization",
    "Organization Creation Date",
  ];

  const error = data?.me === null;
  const user = data?.me;
  const memberships = data?.me?.memberships;

  if (loading) {
    return (
      <div className={styles.home}>
        <div className={styles.home__information}>
          <SkeletonLoader />
        </div>
        <div className={styles.home__memberships}>
          <SkeletonLoader />
        </div>
      </div>
    );
  }

  if (error) {
    return <Navigate to="/identification" replace />;
  }

  return (
    <div className={styles.home}>
      <div className={styles.home__information}>
        <div className={styles.home__nav}>
          <h1 className={styles.home__header}>Personal Information</h1>
          <button onClick={() => clearUserStorage()}>Log out</button>
        </div>

        <div className={styles.home__details}>
          <span className={styles.home__title}>First Name:</span>
          <span className={styles.home__value}>{user?.firstName || "Nil"}</span>
        </div>

        <div className={styles.home__details}>
          <span className={styles.home__title}>Last Name:</span>
          <span className={styles.home__value}>{user?.lastName || "Nil"}</span>
        </div>

        <div className={styles.home__details}>
          <span className={styles.home__title}>Email:</span>
          <span className={styles.home__value}>{user?.email || "Nil"}</span>
        </div>

        <div className={styles.home__details}>
          <span className={styles.home__title}>Created At:</span>
          <span className={styles.home__value}>
            {formatDate(user?.createdAt) || "Nil"}
          </span>
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
              memberships.map((item: Membership, index: number) => (
                <tr key={index}>
                  <td>{item.role || "Nil"}</td>
                  <td>{item?.org?.name || "Nil"}</td>
                  <td>{item?.org?.kind || "Nil"}</td>
                  <td>{formatDate(item?.org?.createdAt) || "Nil"}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
