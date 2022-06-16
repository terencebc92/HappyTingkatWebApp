package org.generation.happytingkat.controller;

import org.generation.happytingkat.repository.entity.Package;
import org.generation.happytingkat.service.PackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/package")
public class PackageController {

    final PackageService packageService;

    public PackageController(@Autowired PackageService packageService)
    {
        this.packageService = packageService;
    }

    @CrossOrigin
    @GetMapping("/all")
    public List<Package> getPackages()
    {
        return packageService.all();
    }

}

