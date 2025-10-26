#!/bin/bash

REPO_URL="https://github.com/marcamolaagency-dotcom/ianexpro-landing.git"
BRANCH="main"
COMMIT_MENSAJE="Deploy automático: actualización de landing"

if [ ! -d ".git" ]; then
  git init
  git branch -M $BRANCH
  git remote add origin $REPO_URL
fi

git add .
git commit -m "$COMMIT_MENSAJE" || echo "No hay cambios nuevos para subir"
git push -u origin $BRANCH

