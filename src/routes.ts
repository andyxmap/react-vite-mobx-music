export function routeBasedFile() {
    const routes = []
    const pages = import.meta.globEager("@/pages/**/*.tsx");
    for (const path in pages) {
      
      const fileName = path.match(/\.\/pages\/(.*)\.(tsx|jsx)$/)?.[1];
      if (!fileName) {
        continue;
      }
      
    const mod = pages[path]

    let normalize = ""
    if(fileName === "404"){
      normalize = "*"
    }
    else{
      normalize = fileName.includes("@")
      ? fileName.replace("@", ":")
      : fileName.replace(/\/index/, "");
    }
       
    routes.push({
      path: fileName === "index" ? "/" : `/${normalize.toLowerCase()}`,
      Element: mod.default as any,
    });
    
    }
    
    console.table(routes)
    return routes;
  
  }