import { splitProps } from "solid-js";
function PeopleCallIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.75 3.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM3.5 5.75a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zm0 4.25a2 2 0 00-2 2V12.08a1.72 1.72 0 00.01.18 3.95 3.95 0 00.67 1.8C2.88 15.09 4.24 16 6.75 16c2.51 0 3.87-.92 4.57-1.93a3.95 3.95 0 00.68-1.99V12a2 2 0 00-2-2H3.5zm-1 2.06V12a1 1 0 011-1H10a1 1 0 011 1v.16l-.06.33c-.07.27-.2.64-.45 1C10.01 14.2 9 15 6.75 15s-3.26-.8-3.74-1.5a2.95 2.95 0 01-.5-1.42l-.01-.02zM14.5 5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 6.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm3.73 3.82l-.4.94-.03.1c-.12.4-.02.82.27 1.1l.88.83-.03.22a4.03 4.03 0 01-1.53 2.47l-1.05-.36-.1-.03a.95.95 0 00-.98.41l-.58.84-.05.1c-.22.4-.15.92.17 1.25l.38.39.1.09c.37.3.86.41 1.32.27 1.18-.37 2.26-1.46 3.25-3.28 1-1.82 1.34-3.36 1.05-4.63-.12-.53-.5-.95-1-1.11l-.5-.16-.1-.03a.96.96 0 00-1.07.6z"/>
    </svg>);
}
export default PeopleCallIcon;
