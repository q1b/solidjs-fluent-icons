import { splitProps } from "solid-js";
function ShiftsTeamIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3h-3.02l.02-.38c0-.91-.59-1.75-1.45-2.02a2.25 2.25 0 00-3.31-3.01A2.75 2.75 0 003 10.1V6zm7 .5a.5.5 0 00-1 0v4c0 .28.22.5.5.5h3a.5.5 0 000-1H10V6.5zm-6.25 8a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM4 19c2.14 0 3-1.1 3-2.19a1.3 1.3 0 00-1.29-1.31H2.3A1.3 1.3 0 001 16.81c0 1.1.86 2.19 3 2.19zm3.5-.5h-.02c.35-.51.52-1.1.52-1.69 0-.48-.15-.93-.4-1.31h1.33c.6 0 1.07.5 1.07 1.13 0 .93-.71 1.87-2.5 1.87zm.25-4a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"/>
    </svg>);
}
export default ShiftsTeamIcon;
