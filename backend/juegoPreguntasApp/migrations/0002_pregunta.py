# Generated by Django 4.0.3 on 2022-04-05 17:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('juegoPreguntasApp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pregunta',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nivel', models.PositiveIntegerField(blank=True, default=0, null=True)),
                ('pregunta', models.TextField(blank=True, max_length=400, null=True)),
            ],
        ),
    ]
