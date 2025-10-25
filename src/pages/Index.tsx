import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { toast } from "sonner";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", service: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Heart" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-foreground">МедКлиник+</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('doctors')} className="text-foreground hover:text-primary transition-colors">Врачи</button>
              <button onClick={() => scrollToSection('prices')} className="text-foreground hover:text-primary transition-colors">Цены</button>
              <button onClick={() => scrollToSection('clinics')} className="text-foreground hover:text-primary transition-colors">Клиники</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('appointment')} className="hidden md:flex">
              Записаться онлайн
            </Button>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Забота о вашем здоровье — наша миссия
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Современная сеть многопрофильных клиник в Москве. 
                Опытные врачи, новейшее оборудование и индивидуальный подход к каждому пациенту.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('appointment')} className="text-lg px-8">
                  <Icon name="CalendarCheck" className="mr-2" size={20} />
                  Записаться на приём
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')} className="text-lg px-8">
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/b6c4a0c6-bec3-456b-a8fa-52855da7d2de/files/1fc7568d-97b5-4c3e-abdf-b174c040ac88.jpg" 
                alt="Современная клиника"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-2">15+</h3>
                <p className="text-muted-foreground">лет опыта</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-secondary" size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-2">120+</h3>
                <p className="text-muted-foreground">врачей-специалистов</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-primary" size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-2">8</h3>
                <p className="text-muted-foreground">клиник в Москве</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" className="text-secondary" size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-2">50K+</h3>
                <p className="text-muted-foreground">довольных пациентов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр медицинских услуг для всей семьи
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "Stethoscope", title: "Терапия", desc: "Комплексная диагностика и лечение" },
              { icon: "Activity", title: "Кардиология", desc: "Современные методы диагностики сердца" },
              { icon: "Baby", title: "Педиатрия", desc: "Забота о здоровье ваших детей" },
              { icon: "Eye", title: "Офтальмология", desc: "Диагностика и лечение зрения" },
              { icon: "Brain", title: "Неврология", desc: "Лечение заболеваний нервной системы" },
              { icon: "Bone", title: "Ортопедия", desc: "Лечение опорно-двигательного аппарата" },
              { icon: "TestTube", title: "Лабораторная диагностика", desc: "Точные анализы и быстрые результаты" },
              { icon: "Scan", title: "УЗИ и МРТ", desc: "Современное диагностическое оборудование" },
              { icon: "Syringe", title: "Вакцинация", desc: "Защита от инфекционных заболеваний" }
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="doctors" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши врачи</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Квалифицированные специалисты с многолетним опытом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Иванова Елена Сергеевна", spec: "Кардиолог, врач высшей категории", exp: "Стаж 18 лет" },
              { name: "Петров Андрей Владимирович", spec: "Терапевт, кандидат медицинских наук", exp: "Стаж 22 года" },
              { name: "Смирнова Ольга Игоревна", spec: "Педиатр, врач высшей категории", exp: "Стаж 15 лет" }
            ].map((doctor, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={idx === 0 ? "https://cdn.poehali.dev/projects/b6c4a0c6-bec3-456b-a8fa-52855da7d2de/files/4a038ce0-3334-4d81-9825-1ff9381bc38b.jpg" : "https://cdn.poehali.dev/projects/b6c4a0c6-bec3-456b-a8fa-52855da7d2de/files/30d9df59-56d7-4cce-aeaa-64db4a4ffca9.jpg"}
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                  <p className="text-muted-foreground mb-2">{doctor.spec}</p>
                  <p className="text-sm text-primary font-medium">{doctor.exp}</p>
                  <Button className="w-full mt-4" variant="outline" onClick={() => scrollToSection('appointment')}>
                    Записаться на приём
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Цены на услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачное ценообразование без скрытых платежей
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { service: "Консультация терапевта", price: "2 500 ₽" },
              { service: "Консультация кардиолога", price: "3 000 ₽" },
              { service: "Консультация педиатра", price: "2 800 ₽" },
              { service: "УЗИ органов брюшной полости", price: "3 500 ₽" },
              { service: "ЭКГ", price: "1 500 ₽" },
              { service: "Общий анализ крови", price: "800 ₽" }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex justify-between items-center">
                  <span className="font-medium">{item.service}</span>
                  <span className="text-xl font-bold text-primary">{item.price}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="clinics" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши клиники</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Удобное расположение во всех районах Москвы
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Клиника на Арбате", address: "ул. Арбат, д. 15", metro: "Арбатская" },
              { name: "Клиника в Марьино", address: "ул. Люблинская, д. 42", metro: "Марьино" },
              { name: "Клиника в Строгино", address: "ул. Маршала Катукова, д. 24", metro: "Строгино" },
              { name: "Клиника в Медведково", address: "Заревый проезд, д. 10", metro: "Медведково" }
            ].map((clinic, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Building2" className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{clinic.name}</h3>
                  <div className="flex items-start gap-2 mb-2 text-sm text-muted-foreground">
                    <Icon name="MapPin" size={16} className="mt-0.5" />
                    <span>{clinic.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Icon name="Train" size={16} />
                    <span>м. {clinic.metro}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">О нас</h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">МедКлиник+</span> — это современная сеть многопрофильных медицинских клиник, 
              которая уже более 15 лет заботится о здоровье жителей Москвы.
            </p>
            <p>
              Мы объединили лучших врачей-специалистов, новейшее диагностическое оборудование и передовые методики лечения, 
              чтобы предоставить нашим пациентам медицинскую помощь высочайшего качества.
            </p>
            <p>
              Наши клиники расположены в разных районах Москвы, что делает качественную медицинскую помощь доступной для каждого. 
              Мы работаем без выходных, чтобы вы всегда могли получить необходимую помощь.
            </p>
          </div>
        </div>
      </section>

      <section id="appointment" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Онлайн-запись</h2>
            <p className="text-lg text-muted-foreground">
              Заполните форму, и мы свяжемся с вами для подтверждения записи
            </p>
          </div>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Иван Иванов"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+7 (999) 123-45-67"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="service">Услуга</Label>
                  <Input 
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    placeholder="Консультация терапевта"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Укажите желаемую дату и время приёма"
                    className="mt-2"
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                <a href="tel:+74951234567" className="text-lg text-primary hover:underline">
                  +7 (495) 123-45-67
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a href="mailto:info@medclinic.ru" className="text-lg text-primary hover:underline">
                  info@medclinic.ru
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Режим работы</h3>
                <p className="text-muted-foreground">Ежедневно<br />08:00 - 21:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Heart" size={28} />
                <span className="text-xl font-bold">МедКлиник+</span>
              </div>
              <p className="text-white/70">
                Современная медицина для всей семьи
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#services" className="hover:text-white transition-colors">Терапия</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Кардиология</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Педиатрия</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Диагностика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#doctors" className="hover:text-white transition-colors">Врачи</a></li>
                <li><a href="#prices" className="hover:text-white transition-colors">Цены</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@medclinic.ru</li>
                <li>Ежедневно 08:00-21:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>© 2024 МедКлиник+. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
