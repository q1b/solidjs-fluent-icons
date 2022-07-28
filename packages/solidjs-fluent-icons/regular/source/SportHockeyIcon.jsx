import { splitProps } from "solid-js";
function SportHockeyIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.97 2.06a3.7 3.7 0 013.45 1.3l1.71 1.93c.75.84 1.08 2.02.73 3.13-2.1 6.7-7.03 9.08-10.19 9.55-.9.14-1.76-.22-2.39-.78l-1.8-1.6A4.07 4.07 0 012.2 11.2c2.12-5.99 6.46-8.47 9.76-9.15zm2.7 1.97c-.68-.76-1.6-1.17-2.5-.99-3 .61-7.03 2.89-9.02 8.5-.4 1.15.02 2.44.98 3.3l1.82 1.6c.46.41 1.03.63 1.57.54 2.85-.42 7.41-2.57 9.39-8.86.23-.73.02-1.55-.53-2.16l-1.71-1.93zm-.6.98c.28.04.47.3.42.57a11.89 11.89 0 01-3.32 6.44 11.28 11.28 0 01-4.53 2.96.5.5 0 01-.28-.96c1.05-.3 2.66-1.22 4.1-2.7a10.9 10.9 0 003.05-5.9.5.5 0 01.57-.41z"/>
    </svg>);
}
export default SportHockeyIcon;
