Get-ChildItem -Path '\\banasiewi.cz\www_root$\html\' -file | Remove-Item
Move-Item -Path .\ClientApp\dist\client-app\* -Destination '\\banasiewi.cz\www_root$\html\'