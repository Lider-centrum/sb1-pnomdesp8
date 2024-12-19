const baseTitle = 'LIDER - Rozwój Szkół Językowych';

export const setDocumentTitle = (path: string = window.location.pathname) => {
  const isMainPage = path === '/';
  const forceMessage = isMainPage ? 'Moc jest z tobą' : 'Niech moc będzie z tobą';
  
  document.title = `${forceMessage} | ${baseTitle}`;
};