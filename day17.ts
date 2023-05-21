function areDeeplyEqual(o1:any, o2:any):boolean {
  // type checking
  if (typeof o1 !== typeof o2) {
    return false; 
  }

  // null checking
  if (typeof o1 !== 'object' || o1 === null || o2 === null) {
    return o1 === o2;
  }

  // arrays checking
  if (Array.isArray(o1) && Array.isArray(o2)) {
    // lenghts checking if arrays
    if (o1.length !== o2.length) {
      return false; 
    }

    
    for (let i = 0; i < o1.length; i++) {
     
      if (!areDeeplyEqual(o1[i], o2[i])) {
        return false;
      }
    }

    return true;
  }

  // one of them is array   
  if (Array.isArray(o1) || Array.isArray(o2)) {
    return false;
  }

  
  const keys1 = Object.keys(o1);
  const keys2 = Object.keys(o2);

  // Check if objects have different number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  
  for (const key of keys1) {
    if (!areDeeplyEqual(o1[key], o2[key])) {
      return false; 
    }
  }

  return true; 
}
