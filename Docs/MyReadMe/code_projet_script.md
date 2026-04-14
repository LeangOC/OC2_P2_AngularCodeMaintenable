## bash
- tree > code_projet.txt
- find . -type f \( -name "*.ts" -o -name "*.html" -o -name "*.scss" -o -name "*.css" -o -name "*.json" \) \
  -exec echo "\n\n===== {} =====\n" \; -exec cat {} \; >> code_projet.txt

## powershel ( si pas bash Unix, git bash ne possède pas la commande tree )
- cd C:\chemin\vers\mon-projet\src
- tree /F /A > code_projet.txt
-
# Supprime l'ancien fichier s'il existe
if (Test-Path code_projet.txt) { Remove-Item code_projet.txt }

# Export de l'arborescence
Get-ChildItem -Recurse | Where-Object { $_.PSIsContainer -or $_.Extension -match '\.ts|\.html|\.scss|\.css|\.json' } |
Where-Object { $_.FullName -notmatch "node_modules|dist|\.git" } |
ForEach-Object { Add-Content code_projet.txt $_.FullName }

# Ajout du contenu des fichiers
$files = Get-ChildItem -Recurse -Include *.ts,*.html,*.scss,*.css,*.json |
Where-Object { $_.FullName -notmatch "node_modules|dist|\.git" }

foreach ($file in $files) {
Add-Content code_projet.txt "`n`n===== $($file.FullName) =====`n"
Get-Content $file.FullName | Add-Content code_projet.txt
}
