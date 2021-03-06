---
title: Initialize a window in fullscreen by default
tags: [raylib]
author: Victor Gallet (Elkantor)
url_author: https://twitter.com/TheElkantor
date: 2019-05-26
description: How to initialize a raylib window in fullscreen by default?
---

###

<!-- {.-literate-style} -->

When initializing a new window with raylib, you can set its size in fullscreen by default, by passing 0 for the width and height parameters when calling the **InitWindow** function.

<figure>
<figcaption class='-title'>TLDR</figcaption>

```c
	#include <raylib.h>

	int main(int argc, char** argv){

		// Initialize a window in fullscreen
		InitWindow(0, 0, "test window");

		while(!WindowShouldClose()){
			BeginDrawing();
				ClearBackground(LIGHTGRAY);
				DrawFPS(20, 20);
				...
			EndDrawing();
		}

		CloseWindow();
		return 0;
	}
```

</figure>