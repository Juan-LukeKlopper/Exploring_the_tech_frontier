import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
    const { colorMode } = useColorMode();

    return (
        <Giscus
          repo="Juan-LukeKlopper/Exploring_the_tech_frontier"
          repoId='R_kgDOKNuC4w'
          category='General'
          categoryId='DIC_kwDOKNuC484CZLV_'
          mapping='url'
          term="Hello from beyond the frontier"
          strict='0'
          reactionsEnabled='1'
          emitMetadata='1'
          inputPosition='top'
          theme={colorMode}
          lang="en"
          loading='lazy'
          crossorigin="anonymous"
          async
        />
    );
}
