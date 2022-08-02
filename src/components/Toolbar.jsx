import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// styles
import styles from "./Toolbar.module.scss";
// icons
import { BsBriefcase } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { IoMdBicycle } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineCleaningServices } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoAirplaneOutline } from "react-icons/io5";
import { AiOutlineTool } from "react-icons/ai";
import { BsPuzzle } from "react-icons/bs";
// context
import SingleToDoContext from "./context/SingleToDoContext";

function Toolbar({ toolsOpen, setToolsOpen }) {
  const { toDo, setToDo } = useContext(SingleToDoContext);
  const [iconActive, setIconActive] = useState("9");

  const handleTimeChange = (e) => {
    setToDo((prSt) => ({ ...prSt, time: e.target.value }));
  };

  const handleIconChange = (e) => {
    setToDo((prSt) => ({ ...prSt, iconId: Number(e.target.id) }));
    setIconActive(e.target.id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.time}>
        <p className={styles.time_name}>TIME</p>
        <input
          onChange={handleTimeChange}
          className={styles.time_input}
          type="test"
          placeholder="Type time..."
        />
      </div>
      <div className={styles.category}>
        <p className={styles.time}>CATEGORY</p>
        <div className={styles.icons_grid}>
          <div
            className={
              iconActive === "1"
                ? styles.category_icon_active
                : styles.category_icon
            }
            onClick={handleIconChange}
          >
            <BsBriefcase size={20} id="1" />
            <p id="1">work</p>
          </div>
          <div
            className={
              iconActive === "2"
                ? styles.category_icon_active
                : styles.category_icon
            }
            onClick={handleIconChange}
          >
            <BsBook size={20} id="2" />
            <p id="2">study</p>
          </div>
          <div
            className={
              iconActive === "3"
                ? styles.category_icon_active
                : styles.category_icon
            }
            onClick={handleIconChange}
          >
            <IoMdBicycle size={20} id="3" />
            <p id="3">sport</p>
          </div>
          <div
            className={
              iconActive === "4"
                ? styles.category_icon_active
                : styles.category_icon
            }
            onClick={handleIconChange}
          >
            <FiShoppingCart size={20} id="4" />
            <p id="4">schop</p>
          </div>
          <div
            className={
              iconActive === "5"
                ? styles.category_icon_active
                : styles.category_icon
            }
            onClick={handleIconChange}
          >
            <MdOutlineCleaningServices size={20} id="5" />
            <p id="5">clean</p>
          </div>
          <div
            className={
              iconActive === "6"
                ? styles.category_icon_active
                : styles.category_icon
            }
            onClick={handleIconChange}
          >
            <IoFastFoodOutline size={20} id="6" />
            <p id="6">eat</p>
          </div>
          <div
            className={
              iconActive === "7"
                ? styles.category_icon_active
                : styles.category_icon
            }
            onClick={handleIconChange}
          >
            <IoAirplaneOutline size={20} id="7" />
            <p id="7">travel</p>
          </div>
          <div
            className={
              iconActive === "8"
                ? styles.category_icon_active
                : styles.category_icon
            }
            onClick={handleIconChange}
          >
            <AiOutlineTool size={20} id="8" />
            <p id="8">repair</p>
          </div>
          <div
            className={
              iconActive === "9"
                ? styles.category_icon_active
                : styles.category_icon
            }
            onClick={handleIconChange}
          >
            <BsPuzzle size={20} id="9" />
            <p id="9">others</p>
          </div>
        </div>
      </div>
      <div className={styles.time_btn}>
        <button
          className={styles.time_button}
          onClick={() => setToolsOpen((s) => !s)}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
