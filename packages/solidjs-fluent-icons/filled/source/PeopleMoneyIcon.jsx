import { splitProps } from "solid-js";
function PeopleMoneyIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.75 9a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM9 12.5c0-1.1.71-2.04 1.7-2.37A2 2 0 0010 10H3.5a2 2 0 00-2 2s0 4 5.25 4c.9 0 1.64-.12 2.26-.31L9 15.5v-3zm8-6a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-7 6c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-3zm1 0v1c.83 0 1.5-.67 1.5-1.5h-1a.5.5 0 01-.5.5zm7 1v-1a.5.5 0 01-.5-.5h-1c0 .83.67 1.5 1.5 1.5zM16.5 16h1c0-.28.22-.5.5-.5v-1c-.83 0-1.5.67-1.5 1.5zM11 14.5v1c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5zm3.5 1a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
    </svg>);
}
export default PeopleMoneyIcon;
