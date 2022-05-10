// import { ComponentType } from "react";

declare module "a/b" {
    // const B: ComponentType<any>;
    const B: import("react").ComponentType<any>;
    export default B;
}
