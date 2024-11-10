import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './youtube.component.html',
  styleUrl: './youtube.component.css'
})

export class YoutubeComponent implements OnInit {

  videoId: string | null = '';
  videoUrl: string = '';
  sanitizedUrl: SafeResourceUrl | null = null;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // Get the video ID from the route parameter
    this.route.paramMap.subscribe(params => {
      const videoId = params.get('videoId');
      if (videoId) {
        this.videoUrl = `https://www.youtube.com/embed/${videoId}`;
        this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
      }
    });
  }
}

/* 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})

export class YoutubeComponent implements OnInit {

  videoId: string | null = '';
  videoUrl: string = '';
  sanitizedUrl: SafeResourceUrl | null = null;
  names: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Emma']; // Array of names
  currentName: string = '';
  isCenter: boolean = false; // To track if the name is at the center

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // Get the video ID from the route parameter
    this.route.paramMap.subscribe(params => {
      const videoId = params.get('videoId');
      if (videoId) {
        this.videoUrl = `https://www.youtube.com/embed/${videoId}`;
        this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
      }
    });

    // Start the scrolling text
    this.startScrollingText();
  }

  startScrollingText(): void {
    this.updateName(); // Set initial name
    setInterval(() => {
      this.updateName(); // Change the name every cycle
    }, 10000); // 10 seconds for each name cycle
  }

  updateName(): void {
    this.currentName = this.names[Math.floor(Math.random() * this.names.length)]; // Pick a random name
    this.isCenter = false; // Reset the center flag

    // Change to red after 5 seconds (center position)
    setTimeout(() => {
      this.isCenter = true;
    }, 5000); // Stop and turn red at the center after 5 seconds
  }
}




 */