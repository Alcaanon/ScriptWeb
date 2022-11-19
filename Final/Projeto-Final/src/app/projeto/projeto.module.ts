import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { FactsComponent } from './facts/facts.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    HeroComponent,
    FactsComponent,
    SkillsComponent,
    ResumeComponent,
    TestimonialsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    HeroComponent,
    FactsComponent,
    SkillsComponent,
    ResumeComponent,
    TestimonialsComponent,
    SharedModule
  ],
  
})
export class ProjetoModule { }
