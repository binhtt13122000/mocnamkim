import React, { useState, useEffect } from "react";

import * as _ from "lodash";
import { useLocation, useNavigate } from "react-router";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { ListItem, ListItemText, Box, useTheme } from "@mui/material";

import RoutesCollapse from "../RoutesCollapse";
import { routes } from "./data";

export type ChildrenType = {
    fatherIndex: number;
    selectedChildIndex: number;
    isOpen: boolean;
};

type ListRoutesType = {
    appbarHeight: number;
};

const initialValue = {
    fatherIndex: -1,
    selectedChildIndex: -1,
    isOpen: false,
};

const ListRoutes: React.FC<ListRoutesType> = ({ appbarHeight }) => {
    const theme = useTheme();
    const router = useLocation();
    const navigate = useNavigate();

    const [openChildren, setOpenChildren] = useState<ChildrenType>(initialValue);
    useEffect(() => {
        let itemSelectedFromSessionStorage = null;
        let select: ChildrenType = initialValue;
        let split = router.pathname.slice(1).split("/");
        let routerExecute = split.length > 0 ? `/${split[0]}` : router.pathname;
        routes.forEach((item) => {
            if (!_.isEqual(select, initialValue)) {
                return;
            }
            if (item.path) {
                _.isEqual(routerExecute, item.path) &&
                    (select = {
                        fatherIndex: item.id,
                        selectedChildIndex: item.id,
                        isOpen: true,
                    });
            } else if (item.children) {
                let objectSelected = item.children.find((item) =>
                    _.isEqual(routerExecute, item.path)
                );
                objectSelected &&
                    (select = {
                        fatherIndex: item.id,
                        selectedChildIndex: objectSelected.id,
                        isOpen: true,
                    });
            }
        });
        if (window.sessionStorage != undefined) {
            itemSelectedFromSessionStorage = window.sessionStorage.getItem("itemSelected");
        }
        if (itemSelectedFromSessionStorage !== null) {
            if (
                _.isEqual(
                    select,
                    JSON.parse(itemSelectedFromSessionStorage) && !_.isEqual(select, initialValue)
                )
            ) {
                setOpenChildren(JSON.parse(itemSelectedFromSessionStorage));
            } else if (!_.isEqual(select, initialValue)) {
                setOpenChildren(select);
            } else if (!_.isEqual(JSON.parse(itemSelectedFromSessionStorage), initialValue)) {
                setOpenChildren(JSON.parse(itemSelectedFromSessionStorage));
            }
        } else if (!_.isEqual(select, initialValue)) {
            setOpenChildren(select);
        }
    }, [router]);

    useEffect(() => {
        if (!_.isEqual(openChildren, initialValue)) {
            window.sessionStorage.setItem("itemSelected", JSON.stringify(openChildren));
        }
    }, [openChildren]);
    const handleListItemClick = (
        index: number,
        path: string | undefined,
        hasChildren: boolean,
        fatherIndex: number
    ) => {
        if (path) {
            navigate(path);
        }
        if (hasChildren) {
            setOpenChildren((prev) => {
                return {
                    ...prev,
                    fatherIndex: fatherIndex,
                    selectedChildIndex: index,
                    isOpen: prev.fatherIndex != fatherIndex ? true : !prev.isOpen,
                };
            });
        } else {
            setOpenChildren((prev) => {
                return {
                    ...prev,
                    selectedChildIndex: index,
                    fatherIndex: fatherIndex,
                    isOpen: true,
                };
            });
        }
    };

    return (
        <React.Fragment>
            <Box
                style={{
                    overflowY: "auto",
                    height: "100%",
                }}
            >
                <Box
                    sx={{
                        marginTop: `${appbarHeight}px`,
                        backgroundColor: "#20252a",
                        color: "#FFFFFF",
                        overflow: "hidden",
                        position: "relative",
                    }}
                ></Box>
                {routes.map((item) => (
                    <React.Fragment key={item.name}>
                        <ListItem
                            button
                            key={item.name}
                            onClick={() =>
                                handleListItemClick(
                                    item.id,
                                    item.path,
                                    Boolean(item.children),
                                    item.id
                                )
                            }
                            style={
                                !item?.children && openChildren.fatherIndex === item.id
                                    ? {
                                          transition: "ease-in-out .4s",
                                          borderRight: `3px solid ${theme.palette.primary.main}`,
                                      }
                                    : {}
                            }
                            selected={openChildren.fatherIndex === item.id}
                        >
                            {/* <ListItemIcon
                                style={{
                                    minWidth: "50px",
                                }}
                            >
                                <img src={item.icon} width={30} height={30} alt={"icon"} />
                            </ListItemIcon> */}
                            <ListItemText primary={`${item.name}`} />
                            {item?.children ? (
                                openChildren.fatherIndex == item.id && openChildren.isOpen ? (
                                    <ExpandLess />
                                ) : (
                                    <ExpandMore />
                                )
                            ) : null}
                        </ListItem>
                        {item?.children ? (
                            <RoutesCollapse
                                item={item?.children}
                                fatherId={item?.id}
                                handleListItemClick={handleListItemClick}
                                openChildren={openChildren}
                            />
                        ) : null}
                    </React.Fragment>
                ))}
            </Box>
        </React.Fragment>
    );
};

export default ListRoutes;
