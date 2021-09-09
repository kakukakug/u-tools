import React, { useState, useEffect, useCallback } from "react";

import { iconSearch } from "../../../../01_entity/models/vector_icons";

import { IconsScreenUI } from "./ui";

export const IconsScreen = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    setVisibleIccons("AntDesign", "");
  }, [setVisibleIccons]);

  const setVisibleIccons = useCallback(
    (selectFamily, searchText) => {
      const tempIcons = iconSearch(selectFamily, searchText);

      setIcons(tempIcons);
    },
    [setIcons]
  );

  return <IconsScreenUI icons={icons} setVisibleIccons={setVisibleIccons} />;
};
