import {
  authR,
  protectedR,
  publicR,
  componentR,
} from "components/app/Router/routes";

export function reverseURL({ name, args, prefix }) {
  if (typeof name !== "string" || name === "") {
    console.error(`Invalid name argument`);
    return "/";
  }
  let routes = [...publicR, ...authR, ...protectedR];
  let namespace = false;
  name = name.split(":");

  if (name.length > 1) {
    // has namespace
    for (let index = 0; index < componentR.length; index++) {
      const componentRoute = componentR[index];
      if (componentRoute.namespace === name[0]) {
        namespace = true;
        routes = componentRoute.route_list;
        name = name[1];
        break;
      }
    }
    if (!namespace) {
      console.error(`Invalid namespace`);
      return "/";
    }
  } else {
    name = name[0];
  }

  for (let index = 0; index < routes.length; index++) {
    const route = routes[index];
    if (route.name === name) {
      let routeName = prefix ? `${prefix}${route.route}` : route.route;
      if (
        typeof args === "object" &&
        Object.keys(args).length > 0 &&
        args.constructor === Object
      ) {
        const keys = Object.keys(args);
        for (let index = 0; index < keys.length; index++) {
          const key = keys[index];
          routeName = routeName.replace(`:${key}`, args[key]);
        }
      }
      return routeName;
    }
  }
  console.error(`Route "${name}" doesn't exist`);
  return name;
}
