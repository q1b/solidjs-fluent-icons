import { splitProps } from "solid-js";
function PeopleTeamIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12.5 4.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm5 .5a2 2 0 11-4 0 2 2 0 014 0zm-13 2a2 2 0 100-4 2 2 0 000 4zM6 9.25C6 8.56 6.56 8 7.25 8h5.5c.69 0 1.25.56 1.25 1.25V14a4 4 0 01-8 0V9.25zm-1 0c0-.46.14-.9.38-1.25H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 003.4 2.97C5.14 15.37 5 14.7 5 14V9.25zM15 14c0 .7-.14 1.37-.4 1.97A3 3 0 0018 13V9.25C18 8.56 17.44 8 16.75 8h-2.13c.24.36.38.79.38 1.25V14z"/>
    </svg>);
}
export default PeopleTeamIcon;
