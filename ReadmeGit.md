# How to add new features or fix problems

Download files from github

    git clone https://github.com/letbcn/let-viewer.git .

Create a new branch

    git checkout -b "name of branch"

// modify the files

Check if what files are modified

    git status

Add the files in the stage space

    git add *

Create commit

    git commit -m "Description about accions message"

Upload files to github

First check if you have origin defined

    git remote

If not exist origin, add it

        git add remote origin

Upload files

git push -u origin "name of branch"

When the new feature are finished or fix the errors you have to options

1- Go to the master and merge

    git chekcout master

    git merge "name of branch"

And remember to upload the new branch

2- If you want that someone review the code or check if is it working the script. create the "Pull request" [in the repository](https://github.com/letbcn/let-viewer)

**Note: when you upload the files on the github you will need to put your username and password. If not and is it not working it will problably have to remove github credentials saved in the operating system.**
