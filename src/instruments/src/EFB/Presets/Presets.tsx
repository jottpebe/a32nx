import React from 'react';
import { PageLink, PageRedirect, TabRoutes } from '../Utils/routing';
import { Navbar } from '../UtilComponents/Navbar';
import { AircraftPresets } from './Widgets/AircraftPresets';
import { LightPresets } from './Widgets/LightPresets';
import { PresetsHelp } from './Widgets/PresetsHelp';

export const Presets = () => {
    const tabs: PageLink[] = [
        { name: 'Interior Lighting', component: <LightPresets /> },
        { name: 'Aircraft States', component: <AircraftPresets /> },
        { name: '?', component: <PresetsHelp /> },
    ];

    return (
        <div className="w-full">
            <div className="relative mb-4">
                <h1 className="font-bold">Presets</h1>
                <Navbar
                    className="absolute top-0 right-0"
                    tabs={tabs}
                    basePath="/presets"
                />
            </div>
            <PageRedirect basePath="/presets" tabs={tabs} />
            <TabRoutes basePath="/presets" tabs={tabs} />
        </div>
    );
};
