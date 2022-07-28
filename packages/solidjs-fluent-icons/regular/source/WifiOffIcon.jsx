import { splitProps } from "solid-js";
function WifiOffIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.85 2.15a.5.5 0 10-.7.7l3.03 3.03a9.63 9.63 0 00-3.06 2.86.5.5 0 00.82.57 8.61 8.61 0 012.97-2.7l1.44 1.44A6.44 6.44 0 004.28 11a.5.5 0 10.9.45A5.41 5.41 0 018.1 8.82l1.86 1.85a4.02 4.02 0 00-3.63 2.43.5.5 0 00.92.4 3.03 3.03 0 013.93-1.6l1.65 1.65a.5.5 0 00.2.2l4.1 4.1a.5.5 0 00.71-.7l-15-15zM9.6 7.48l1.02 1.02a5.43 5.43 0 014.28 2.97.5.5 0 00.9-.46A6.43 6.43 0 009.6 7.48zM7.14 5.01l.8.81a8.6 8.6 0 019.2 3.5.5.5 0 00.83-.57A9.61 9.61 0 007.14 5.02zm3.82 8.78a1.3 1.3 0 11-1.83 1.83 1.3 1.3 0 011.83-1.83z"/>
    </svg>);
}
export default WifiOffIcon;
