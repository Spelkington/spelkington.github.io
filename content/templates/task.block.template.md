<%*
  var projectSlug = await tp.system.prompt("Project Slug:")
  var projectFile = tp.file.find_tfile(projectSlug)
  var projectFilePath = projectFile.path
  var projectFileTag = projectFilePath.slice(5, -3)
%>### [[<% projectSlug %>]]

- [ ] #task #<% projectFileTag %>
- [ ] #task #<% projectFileTag %>