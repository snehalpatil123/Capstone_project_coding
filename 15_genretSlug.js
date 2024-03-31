function generateSlug(title) {
   
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    return slug + '.com';
}


console.log(generateSlug("Hello World"));