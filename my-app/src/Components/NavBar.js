import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import "../App.css";

export const NavBar = () =>
{
    return (
        <div>
    <Tabs isFitted variant='enclosed' colorScheme='green' >
    <TabList mb='1em'>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
    </TabList>
    <TabPanels>
        <TabPanel>
        <p>Browse</p>
        </TabPanel>
        <TabPanel>
        <p>My Items</p>
        </TabPanel>
        <TabPanel>
        <p>Account</p>
        </TabPanel>
    </TabPanels>
    </Tabs>
            </div>
        )

};
