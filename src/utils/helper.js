export const convertDate = (publishedAt)=>{
    const publicationDate = new Date(publishedAt);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - publicationDate.getTime();

    // Convert the time difference to various time units
    const diffInSeconds = Math.floor(timeDiff / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInDays / 365);

    // Determine the appropriate time unit to display
    let timeAgo = "";
    if (diffInHours <= 24) {
        timeAgo = `${diffInHours} hour${diffInHours !== 1 ? "s" : ""} ago`;
    } else if (diffInDays <= 7) {
        timeAgo = `${diffInDays} day${diffInDays !== 1 ? "s" : ""} ago`;
    } else if (diffInWeeks <= 4) {
        timeAgo = `${diffInWeeks} week${diffInWeeks !== 1 ? "s" : ""} ago`;
    } else if (diffInMonths <= 12) {
        timeAgo = `${diffInMonths} month${diffInMonths !== 1 ? "s" : ""} ago`;
    } else {
        timeAgo = `${diffInYears} year${diffInYears !== 1 ? "s" : ""} ago`;
    }
    return timeAgo;
}

export const convertToKAndM = (views)=>{
    if(views<1000) return views;
    else if (views < 1000000 ) {
        views = views / 1000;
        views = views.toFixed(1);
        views = views + "K";
    } else {
        views = views / 1000000;
        views = views.toFixed(1);
        views = views + "M";
    }
    return views;
}