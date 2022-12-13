import styles from "../../styles/components/Navbar.module.css";

export const Navbar = ({ listItems, children }) => {
  return (
    <>
      <ul>
        {listItems.map((item, index) => {
          return (
            <li key={index} className={styles.listItem}>
              {item}
            </li>
          );
        })}
      </ul>
      {children}
    </>
  );
};

// export default Navbar;

// named export
// default export
