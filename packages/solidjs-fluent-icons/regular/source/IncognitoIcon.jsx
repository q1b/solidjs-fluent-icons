import { splitProps } from "solid-js";
function IncognitoIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.17 4.28A.5.5 0 016.62 4h6.76c.2 0 .36.1.45.28l1.22 2.44a.5.5 0 10.9-.44l-1.23-2.45A1.5 1.5 0 0013.38 3H6.62a1.5 1.5 0 00-1.34.83L4.05 6.28a.5.5 0 00.9.44l1.22-2.44zm11.25 4.71C11.47 8 8.52 8 2.58 9a.5.5 0 01-.16-.98C8.47 7 11.52 7 17.58 8a.5.5 0 11-.16.98zM5.5 11a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM2 13.5a3.5 3.5 0 016.96-.5h2.08a3.5 3.5 0 110 1H8.96A3.5 3.5 0 012 13.5zM14.5 11a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"/>
    </svg>);
}
export default IncognitoIcon;
