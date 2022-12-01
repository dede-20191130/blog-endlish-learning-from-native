// quoted https://joelhooks.com/a-handy-npm-script-for-creating-a-new-gatsby-blog-post
import fs from "fs"
import slugify from "slugify"
import { resolve, join } from "path";
import {format} from 'date-fns';

const rootDir = resolve(__dirname, "../");

const specifiedPath = process.argv[2];
const pathArr = specifiedPath.split("/");
const rawSlug = pathArr[pathArr.length - 1];

if (pathArr.length < 2 || !rawSlug) {
    throw 'a proper path is required!'
}

const slug = slugify(rawSlug.toLowerCase())
const date = new Date().toISOString();
const dir = join(rootDir, pathArr.slice(0, pathArr.length - 1).join("/"), `${format(new Date(date),"yyyy-MM-dd")}-${slug}`);

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
} else {
    throw 'That post already exists!'
}

fs.writeFile(
    `${dir}/index.md`,
    `---
title: "${rawSlug}"
date: "${date}"
template: "post"
draft: true
slug: "/posts/${slug}"
category: "Undefined"
tags:
  - "Undefined"
description: "${rawSlug}"
socialImage: "https://blog-english-learning-from-native.pages.dev/static/6d23def1cb1bb7e5b95b7d0fb36eaa96/47930/photo.jpg"
---

`,
    function (err) {
        if (err) {
            return console.log(err)
        }

        console.log(`${specifiedPath} was created!`)
    },
)
