import { splitProps } from "solid-js";
function ArrowAutofitWidthDottedIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14.77 15.71l1.51-1.46-1.51-1.46a.75.75 0 111.04-1.08l1.89 1.82a1 1 0 010 1.44l-1.89 1.82a.75.75 0 01-1.04-1.08zm-9.54 0l-1.5-1.46 1.5-1.46a.75.75 0 00-1.04-1.08l-1.88 1.82a1 1 0 000 1.44l1.88 1.82a.75.75 0 001.04-1.08zM8 14.25c0 .42-.33.75-.75.75h-.5a.75.75 0 110-1.5h.5c.42 0 .75.34.75.75zm1.75.75a.75.75 0 110-1.5h.5a.75.75 0 010 1.5h-.5zm2.25-.75c0 .42.34.75.75.75h.5a.75.75 0 100-1.5h-.5a.75.75 0 00-.75.75zM17 5a2 2 0 00-2-2H5a2 2 0 00-2 2v4.25a.75.75 0 001.5 0V5c0-.28.22-.5.5-.5h10c.28 0 .5.22.5.5v4.25a.75.75 0 101.5 0V5z"/>
    </svg>);
}
export default ArrowAutofitWidthDottedIcon;
